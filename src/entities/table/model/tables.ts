import { normalize, schema } from 'normalizr'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITable } from '@/shared/models'

type NormalizedTables = Record<number, ITable>

export const tableSchema = new schema.Entity<ITable>('tables')

export const normalizeTable = (data: ITable) =>
	normalize<ITable, { tables: ITable }>(data, tableSchema)
export const normalizeTables = (data: ITable[]) =>
	normalize<ITable, { tables: ITable[] }>(data, [tableSchema])

const initialState: {
	tables: NormalizedTables
} = {
	tables: [],
}

const Tables = createSlice({
	name: 'tables',
	initialState,
	reducers: {
		setTableList: (state, { payload }: PayloadAction<ITable[]>) => {
			state.tables = normalizeTables(payload).entities.tables
		},
		addTable: (state, { payload }: PayloadAction<ITable>) => {
			state.tables = {
				...normalizeTable(payload).entities.tables,
				...state.tables,
			}
		},
	},
})

export const { setTableList, addTable } = Tables.actions
export const reducer = Tables.reducer
