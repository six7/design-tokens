import { GridStyleObject, PaintStyleObject } from './styles';

export type figmaDataType = {
  tokenFrames: SceneNode[],
  paintStyles: PaintStyleObject[],
  gridStyles: GridStyleObject[],
  textStyles: TextStyle[],
  effectStyles: EffectStyle[]
}
