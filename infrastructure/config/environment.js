export default () => {
  const environment = {
    database: {
      url: process.env.DATABASE_URI || ''
    }
  }

  return environment
}
