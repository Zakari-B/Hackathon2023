export type Area = string

export type AreaSelect = {
    value: Area
    label: string
}

export type AreaListItem = {
    id: number,
    items: string[],
    name: string
}

export type AreaList = AreaListItem[]