import { Body, Column, Container, Head, Html, Preview, Row, Section, Tailwind, Text } from '@react-email/components'

interface EmailTemplateProps {
  body: string
}

EmailTemplate.PreviewProps = {
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, aliquid blanditiis libero rem facilis aperiam nobis adalias reprehenderit, ullam saepe consequuntur commodi repellat consequatur molestiae. Modi obcaecati porro, vitae ad repellendus accusamus. Sint dolorem amet, quo ullamnisi iste, maxime ad sequi quas numquam distinctio? Adipisci tempore molestias in.'
} satisfies EmailTemplateProps

export default function EmailTemplate({ body }: EmailTemplateProps) {
  return (
    <Html>
      <Preview>This is a TEST from Facu!</Preview>
      <Tailwind>
        <Head />
        <Body className='h-full'>
          <Container>
            <Section className='h-1/6 w-full bg-blue-950 text-white p-8 font-sans text-center'>Welcome to Facu Test</Section>
            <Section className='p-8 min-h-[450px]'>{body}</Section>
            <Section className='h-1/6 bg-black text-white p-8 font-sans text-center'>Down here!</Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
