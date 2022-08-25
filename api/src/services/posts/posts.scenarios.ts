import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.postCreateArgs>({
  post: {
    one: { data: { title: 'String', body: 'String' } },
    two: { data: { title: 'String', body: 'String' } },
  },
})

export type StandardScenario = typeof standard
