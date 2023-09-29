import { FC } from 'react'
import { Suspense } from 'react'

import { Container } from '@/components/Container/Container'
import { ExchangeDetails } from '@/components/ExchangeDetails/ExchangeDetails'
import { Loading } from '@/components/Loading/Loading'

interface PageProps {
  params: { id: string }
}

const Page: FC<PageProps> = ({ params }) => {
  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <ExchangeDetails id={params.id} />
      </Suspense>
    </Container>
  )
}

export default Page
