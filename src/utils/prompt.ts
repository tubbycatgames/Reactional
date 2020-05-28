export enum ResponseType {
  Failure,
  Success,
  Timeout,
}

interface PromptResponse {
  time: number
  type: ResponseType
}

export const prompt = async <T>(
  action: Promise<T>,
  expected: T,
  timeout: number
) => {
  return new Promise<PromptResponse>(async (resolve) => {
    const timer = setTimeout(() => {
      resolve({
        time: timeout,
        type: ResponseType.Timeout,
      })
    }, timeout)

    const start = Date.now()

    let resultType = ResponseType.Failure
    try {
      const result = await action
      if (result === expected) {
        resultType = ResponseType.Success
      }
    } catch (ex) {}

    clearTimeout(timer)

    resolve({
      time: Date.now() - start,
      type: resultType,
    })
  })
}
