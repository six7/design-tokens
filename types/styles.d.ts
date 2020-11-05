type StyleType = "PAINT" | "TEXT" | "EFFECT" | "GRID"

export type BaseStyle = {
  readonly id: string,
  readonly type: StyleType,
  name: string,
  description: string
}

type GenericStyleObject = {
  name: string,
  description: string
}

export type PaintStyleObject = GenericStyleObject & {
  paints: any[]
}

type GridType = "GRID" | "ROWS" | "COLUMNS"
type layoutGrid = {
  pattern: GridType,
  sectionSize?: number,
  gutterSize?: number,
  alignment?: string,
  count?: any,
  offset?: number
}

export type GridStyleObject = GenericStyleObject & {
  layoutGrids: layoutGrid[]
}