// Move all mocks to the top, before any imports
jest.mock('lucide-react', () => ({
  ArrowRight: () => <div>ArrowRight</div>,
  Loader: () => <div>Loader</div>,
}));

jest.mock('@/api/submitContactForm', () => ({
  submitContactForm: jest.fn(),
}));

jest.mock('@/components/ui/notification', () => {
  const MockNotification = ({ title, message }: { title: string; message?: string }) => (
    <div data-testid="notification">
      <div>{title}</div>
      {message && <div>{message}</div>}
    </div>
  );
  return {
    __esModule: true,
    default: MockNotification,
  };
});

// Now import everything after mocks
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '../src/app/contact/contact-form';
import { submitContactForm } from '@/api/submitContactForm';

// Type the mocked function
const mockSubmitContactForm = submitContactForm as jest.MockedFunction<typeof submitContactForm>;

describe('ContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('submits the form successfully and shows the success message', async () => {
    mockSubmitContactForm.mockResolvedValue({ success: true });
    
    render(<ContactForm />);
    
    // Debug: Log the rendered component
    screen.debug();
    
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/organization/i), 'Acme Corp');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/phone/i), '1234567890');
    await user.type(screen.getByLabelText(/message/i), 'Hello Street Ninja');
    await user.selectOptions(screen.getByLabelText(/preferred contact method/i), 'email');
    await user.click(screen.getByRole('button', { name: /Get in touch/i }));

    await waitFor(() => {
      expect(screen.getByText(/Thanks for reaching out/i)).toBeInTheDocument();
    });

    expect(mockSubmitContactForm).toHaveBeenCalledWith({
      name: 'John Doe',
      organization: 'Acme Corp',
      email: 'john@example.com',
      phone: '1234567890',
      contactMethod: 'email',
      msg: 'Hello Street Ninja',
    });
  });
});









// jest.mock('@/components/ui/notification');


// jest.mock('lucide-react', () => ({
//   ArrowRight: () => 'ArrowRight',
//   Loader: () => 'Loader',
//   CheckCircle: () => 'CheckCircle',
//   AlertTriangle: () => 'AlertTriangle',
//   Info: () => 'Info',
//   XCircle: () => 'XCircle',
// }));

// jest.mock('@/api/submitContactForm', () => ({
//   submitContactForm: jest.fn(),
// }));


// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import ContactForm from '../app/contact/contact-form';



// import { submitContactForm } from '@/api/submitContactForm';

// describe('ContactForm', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('submits the form successfully and shows the success message', async () => {
//     // @ts-ignore: we're mocking it manually
//     submitContactForm.mockResolvedValue({ success: true });

//     render(<ContactForm />);
//     const user = userEvent.setup();

//     await user.type(screen.getByLabelText(/name/i), 'John Doe');
//     await user.type(screen.getByLabelText(/organization/i), 'Acme Corp');
//     await user.type(screen.getByLabelText(/email/i), 'john@example.com');
//     await user.type(screen.getByLabelText(/phone/i), '1234567890');
//     await user.type(screen.getByLabelText(/message/i), 'Hello Street Ninja');
//     await user.selectOptions(screen.getByLabelText(/preferred contact method/i), 'email');

//     await user.click(screen.getByRole('button', { name: /Get in touch/i }));

//     await waitFor(() => {
//       expect(
//         // screen.getByText(/Thanks for reaching out/i)
//         screen.getByText('Thanks for reaching out')
//       ).toBeInTheDocument();
//     });

//     expect(submitContactForm).toHaveBeenCalledWith({
//       name: 'John Doe',
//       organization: 'Acme Corp',
//       email: 'john@example.com',
//       phone: '1234567890',
//       contactMethod: 'email',
//       msg: 'Hello Street Ninja',
//     });
//   });
// });
