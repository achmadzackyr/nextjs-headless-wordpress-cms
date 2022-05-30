import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-4 flex flex-col items-center">
          <div className="flex flex-row justify-center items-center">
            <SocialIcon url="https://www.facebook.com/chefotang" className="mx-2" />
            <SocialIcon url="https://instagram.com/chefotang" className="mx-2" />
            <SocialIcon url="https://www.youtube.com/c/ChefOtang" className="mx-2" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
