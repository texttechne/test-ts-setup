import { RhymbaService } from '../src/build/rhymba/RhymbaService'
import o2tsConfig from '../odata2ts.config'
import { FetchClient } from '@odata2ts/http-client-fetch'

describe('My Rhymba Test', () => {
  const client = new FetchClient()
  const rhymbaService = new RhymbaService(
    client,
    o2tsConfig.services!['rhymba'].sourceUrl!
  )

  test('', async () => {
    const response = await rhymbaService.AlbumsModel().query()

    expect(response.data.d.results.length).toBe(2)
  })
})
