import { RhymbaService } from '../src/build/rhymba/RhymbaService'
import o2tsConfig from '../odata2ts.config'
import { FetchClient } from '@odata2ts/http-client-fetch'

describe('My Rhymba Tests', () => {
  const BASE_URL = o2tsConfig.services!['rhymba'].sourceUrl!
  const client = new FetchClient()
  const rhymbaService = new RhymbaService(client, BASE_URL)

  test('query albums', async () => {
    // currently the used web service throws an error
    await expect(() => rhymbaService.AlbumsModel().query()).rejects.toThrow(
      'No error message!'
    )

    // what we would like tot test along these lines
    // const response = await rhymbaService.AlbumsModel().query()
    // expect(response.data.d.results.length).toBe(2)
  })
})
