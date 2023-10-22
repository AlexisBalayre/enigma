import { AppNavWrapper } from "~~/components/app/Nav";
import { Formik } from 'formik';
import { Button } from '~~/components/UI/button';
import Input from '~~/components/UI/input';

export default function Mint() {
  /*
  const formik = Formik({
    initialValues: {
      publicURI: '',
      image: '',
      privateURI: ''
    },
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  */
 function handleSubmit() {
  
 }
 function change() {

 }
  return (
    <AppNavWrapper>
      <section className='px-16 pt-24'>
        <h1 className='text-white font-bold text-4xl mb-8'>Mint NFT</h1>
        <form onSubmit={handleSubmit}>
          <p className='text-white font-medium text-xl mb-4'>
            Enter the image URL.
          </p>
          <Input
            id='publicURI'
            name='publicURI'
            type='text'
            onChange={change}
            defaultValue='hello'
            placeholder='public URI'
            classes='mb-12'
          />
          <p className='text-white font-medium text-xl mb-4'>
            Upload an image.
          </p>
          <Input
            id='image'
            name='image'
            type='file'
            onChange={change}
            placeholder='public URI'
            classes='mb-12 text-white'
          />
          <p className='text-white font-medium text-xl mb-4'>
            Enter the image name.
          </p>
          <Input
            id='privateURI'
            name='privateURI'
            type='text'
            onChange={change}
            defaultValue='hello'
            placeholder='private URI'
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
