import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

export function App() {
  return (
    <div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
