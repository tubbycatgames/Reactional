import { ResponseType, prompt } from '../prompt'

const successful = 'expected'
const timeout = 20
const testPrompt = (
  action: Promise<string>,
  expected: ResponseType
) => async () => {
  const promptResponse = await prompt(action, successful, timeout)
  expect(promptResponse.type).toBe(expected)
  expect(promptResponse.time).toBeGreaterThanOrEqual(0)
  expect(promptResponse.time).toBeLessThanOrEqual(timeout)
}

describe('prompt', () => {
  it(
    'should return successful if action response equals the expection',
    testPrompt(Promise.resolve(successful), ResponseType.Success)
  )

  it(
    'should return failure if action response doesnt match the expection',
    testPrompt(Promise.resolve('unexpected'), ResponseType.Failure)
  )

  it(
    'should return failure if action is rejected',
    testPrompt(Promise.reject('uhoh'), ResponseType.Failure)
  )

  it(
    'should return timeout if action is incomplete',
    testPrompt(
      new Promise((r, rej) => setTimeout(rej, timeout * 2)),
      ResponseType.Timeout
    )
  )
})
