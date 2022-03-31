import { calls } from "./calls";

export const gameSeries = {
    byName: (name) => calls(`amiibo/?gameseries=${name}`, 'GET')
}
