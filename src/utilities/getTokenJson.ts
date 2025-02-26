import extractColors from '../extractor/extractColors'
import extractGrids from '../extractor/extractGrids'
import extractFonts from '../extractor/extractFonts'
import extractEffects from '../extractor/extractEffects'
import extractSizes from '../extractor/extractSizes'
import extractBorders from '../extractor/extractBorders'
import extractRadii from '../extractor/extractRadii'
import groupByName from './groupByName'
import styleDictionaryTransformer from '../transformer/styleDictionaryTransformer'
import { propertyObject } from '../../types/propertyObject'
import { figmaDataType } from '../../types/figmaDataType'

const transformer = {
  styleDictionary: styleDictionaryTransformer
}

const exportRawTokenArray = (figmaData: figmaDataType) => {
  // get tokens
  return [ 
    ...extractSizes(figmaData.tokenFrames),
    ...extractBorders(figmaData.tokenFrames),
    ...extractRadii(figmaData.tokenFrames),
    ...extractColors(figmaData.paintStyles),
    ...extractGrids(figmaData.gridStyles),
    ...extractFonts(figmaData.textStyles),
    ...extractEffects(figmaData.effectStyles)
  ]
}

const getTokenJson = (figmaData: figmaDataType, format: string = 'styleDictionary') => {
  // get token array
  const tokenArray = exportRawTokenArray(figmaData)
  // format tokens
  const formattedTokens = tokenArray.map((token: propertyObject )=> transformer[format](token))
  // group tokens
  const groupedTokens = groupByName(formattedTokens)
  // return group tokens
  return groupedTokens
}

export default getTokenJson