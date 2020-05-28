import { PromptResponse, prompt } from '../prompt'

const successful = 'expected'
const testTimeout = 100
const testPrompt = (
  action: Promise<string>,
  expected: PromptResponse
) => async () => {
  const promptResponse = await prompt(action, successful, testTimeout)
  expect(promptResponse).toBe(expected)
}

describe('prompt', () => {
  it(
    'should prompt an action and return successful if expected matches',
    testPrompt(Promise.resolve(successful), PromptResponse.Success)
  )

  it(
    'should prompt an action and return failure if expected doesnt match',
    testPrompt(Promise.resolve('unexpected'), PromptResponse.Failure)
  )

  it(
    'should prompt an action and return failure if action is rejected',
    testPrompt(Promise.reject('uhoh'), PromptResponse.Failure)
  )

  it(
    'should prompt an action and return timeout if action is incomplete',
    testPrompt(
      new Promise((r, reject) => setTimeout(reject, testTimeout * 2)),
      PromptResponse.Timeout
    )
  )
})
