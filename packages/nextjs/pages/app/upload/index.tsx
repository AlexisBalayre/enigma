import { AppNavWrapper } from "~~/components/app/Nav";
import { useFormik } from 'formik';
import { Button } from '~~/components/UI/button';
import { Input } from '~~/components/UI/input';

export default function Mint() {
  const formik = useFormik({
    initialValues: {
      walletAddress: '',
      imageURL: '',
      functionality: '',
    },
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <AppNavWrapper>
      <section className='px-16 pt-24'>
        <h1 className='text-white font-bold text-4xl mb-8'>Mint NFT</h1>
        <form onSubmit={formik.handleSubmit}>
          <p className='text-white font-medium text-xl mb-4'>
            Enter the image URL.
          </p>
          <Input
            id='publicURI'
            name='publicURI'
            type='text'
            placeholder='public URI'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.publicURI}
            classes='mb-12'
          />
          <p className='text-white font-medium text-xl mb-4'>
            Upload an image.
          </p>
          <Input
            id='image'
            name='image'
            type='file'
            placeholder='public URI'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            classes='mb-12'
          />
          <p className='text-white font-medium text-xl mb-4'>
            Enter the link.
          </p>
          <Input
            id='privateURI'
            name='privateURI'
            type='text'
            placeholder='private URI'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.privateURI}
            classes='mb-12'
          />
          <Button type='submit' hierarchy='primary'>
            Submit
          </Button>
        </form>
      </section>
    </AppNavWrapper>
  );
}
