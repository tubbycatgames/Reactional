export enum PromptResponse {
  Failure,
  Success,
  Timeout,
}

export const prompt = async <T>(
  action: Promise<T>,
  expected: T,
  timeout: number
) => {
  return new Promise<PromptResponse>(async (resolve) => {
    const timer = setTimeout(() => {
      resolve(PromptResponse.Timeout)
    }, timeout)

    try {
      const result = await action
      clearTimeout(timer)
      if (result == expected) {
        resolve(PromptResponse.Success)
      } else {
        resolve(PromptResponse.Failure)
      }
    } catch (ex) {
      resolve(PromptResponse.Failure)
    }
  })
}
