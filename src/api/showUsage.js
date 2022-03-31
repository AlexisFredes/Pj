import { calls } from "./calls";

export const showUsage = {
    byHead: (head) => calls(`amiibo/?head=${head}&showusage`, 'GET')
}
