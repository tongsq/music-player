let is_dev = false
if (process.env.NODE_ENV === "development"){
	is_dev = true
}
export const IS_DEV = is_dev