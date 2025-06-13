import fs from 'fs-extra';
import path from 'path';

const openapiPath = path.resolve('apis/openapi.json');
const translationDictionaryPath = path.resolve('config/translations/pt-br.json');
const summariesPath = path.resolve('config/translations/summaries-pt-br.json');
const outputPath = path.resolve('apis/openapi-pt-br.json');

const preferredTagOrder = [
  "Colaborador",
  "Pesquisas",
  "Ponto de venda",
  "Produto",
  "Roteiro e Visitas"
];

const summaryOrderMap = {
  "Colaborador": [
    "Afastamento por ID",
    "Afastamentos de Colaborador",
    "Colaborador por ID (v1)",
    "Colaborador por ID (v3)",
    "Colaboradores (v1)",
    "Editar Colaborador",
    "Endereço do Colaborador",
    "Excluir Colaborador",
    "Excluir Várias Visitas",
    "Inativar Colaborador",
    "Novo Colaborador (v1)",
    "Perfil de Acesso por ID",
    "Salvar Várias Visitas",
    "Visitas Agendadas"
  ],
  "Pesquisas": [
    "Campos do Formulário",
    "Dados do Formulário",
    "Formulários Ativos",
    "Imagem de Formulário"
  ],
  "Ponto de venda": [
    "Atualizar PDV (parcial)",
    "Banner por ID (v3)",
    "Banner por Nome (v3)",
    "Banner por Nome (v3 Q...)",
    "Canais de PDV",
    "Canal de PDV por ID",
    "Canal de PDV por Nome",
    "Canal de PDV por Nome...",
    "Cidades",
    "Cidade por ID",
    "Editar PDV (v1)",
    "Editar Regional",
    "Endereço do PDV",
    "Estado por Código do P...",
    "Estado por ID",
    "Excluir PDV (v1)",
    "Macro-Regional por ID",
    "Nova Rede (v3)",
    "Nova Regional",
    "Novo Canal de PDV",
    "Novo PDV (v1)",
    "Novo Perfil de PDV (v3)",
    "Novo Tipo de PDV (v3)",
    "País por Código",
    "Países",
    "PDV por ID (v1)",
    "PDV por ID (v3)",
    "Perfil de PDV por ID",
    "Perfil de PDV por Nome",
    "Perfis de PDV",
    "Pontos de Venda (v1)",
    "Pontos de Venda (v3)",
    "Rede por ID (v3)",
    "Rede por Nome (v3)",
    "Redes/Bandeiras (v1)",
    "Regionais (v3)",
    "Regional",
    "Regional por ID (v3)",
    "Shopping Center por ID",
    "Shoppings Centers",
    "Tipo de PDV por ID",
    "Tipo de PDV por Nome",
    "Tipos de PDV"
  ],
  "Produto": [
    "Atualizar Linha de Produto",
    "Atualizar SKU",
    "Categoria de Produto por ID",
    "Categoria por ID (v3)",
    "Linha de Produto por ID",
    "Linha de Produto por ID ...",
    "Linhas de Produto",
    "Linhas de Produto (v3)",
    "Marca por ID",
    "Marcas",
    "Nova Linha de Produto",
    "Novo SKU",
    "SKU (v1)",
    "SKU por ID (v1)",
    "SKU por ID (v3)",
    "SKUs (v3)",
    "Supercategoria de Produto por ID",
    "Supercategoria por ID (v3)",
    "Supercategorias (v3)"
  ],
  "Roteiro e Visitas": [
    "Excluir Várias Visitas",
    "Justificativa de Não Comparecimento",
    "Roteiro por Data (v2)",
    "Salvar Várias Visitas",
    "Visitas Agendadas",
    "Visitas por Colaborador"
  ]
};

const isObject = (item) => item && typeof item === 'object' && !Array.isArray(item);

async function main() {
  const openapi = await fs.readJson(openapiPath);
  const translations = await fs.readJson(translationDictionaryPath);
  const summaries = await fs.readJson(summariesPath);

  const translateValue = (value) =>
    typeof value === 'string' && translations[value] ? translations[value] : value;

  const deepTranslate = (obj) => {
    if (!isObject(obj) && !Array.isArray(obj)) return translateValue(obj);
    if (Array.isArray(obj)) return obj.map(item => deepTranslate(item));
    const newObj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = deepTranslate(obj[key]);
      }
    }
    return newObj;
  };

  const translated = deepTranslate(openapi);

  console.log('📝 Aplicando summaries...');
  const methodEntries = [];

  for (const pathKey in translated.paths) {
    const methods = translated.paths[pathKey];
    for (const methodKey in methods) {
      const method = methods[methodKey];
      if (method && method.operationId && summaries[method.operationId]) {
        method.summary = summaries[method.operationId];
      }
      methodEntries.push({ path: pathKey, method: methodKey, data: method });
    }
  }

  if (Array.isArray(translated.tags)) {
    translated.tags.sort((a, b) => preferredTagOrder.indexOf(a.name) - preferredTagOrder.indexOf(b.name));
  }

  // Ordenação completa
  methodEntries.sort((a, b) => {
    const tagA = a.data.tags?.[0] || '';
    const tagB = b.data.tags?.[0] || '';
    const summaryA = a.data.summary || '';
    const summaryB = b.data.summary || '';

    const tagIndexA = preferredTagOrder.indexOf(tagA);
    const tagIndexB = preferredTagOrder.indexOf(tagB);
    if (tagIndexA !== tagIndexB) return tagIndexA - tagIndexB;

    const customOrder = summaryOrderMap[tagA];
    if (customOrder) {
      const indexA = customOrder.indexOf(summaryA);
      const indexB = customOrder.indexOf(summaryB);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
    }

    return summaryA.localeCompare(summaryB, 'pt-BR');
  });

  // Reconstruir paths
  const finalPaths = {};
  for (const { path, method, data } of methodEntries) {
    if (!finalPaths[path]) finalPaths[path] = {};
    finalPaths[path][method] = data;
  }

  translated.paths = finalPaths;

  await fs.writeJson(outputPath, translated, { spaces: 2 });
  console.log('✅ Tradução e ordenação final concluídas.');
}

main().catch((err) => {
  console.error('❌ Erro ao processar o arquivo:', err);
  process.exit(1);
});
