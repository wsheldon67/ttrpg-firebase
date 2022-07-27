import algoliasearch from "algoliasearch/lite"

const appID = '63TFNF6SIM'
const APIKey = '3a935d9fd11ba4ca236618ee36fc1280'

export const search_client = algoliasearch(appID, APIKey)