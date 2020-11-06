import { EffectStyleObject, GridStyleObject, PaintStyleObject, TextStyleObject } from './styles';

export type figmaDataType = {
  tokenFrames: SceneNode[],
  paintStyles: PaintStyleObject[],
  gridStyles: GridStyleObject[],
  textStyles: TextStyleObject[],
  effectStyles: EffectStyleObject[]
}
