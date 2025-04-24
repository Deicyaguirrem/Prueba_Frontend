import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import * as apiService from "./service/apiService";

jest.mock("./service/apiService"); 

beforeEach(() => {
  apiService.fetchData.mockResolvedValue([
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
  ]);
});

test("Carga y muestra datos correctamente desde la API", async () => {
  render(<App />);

  await waitFor(() => expect(screen.getByText("John Doe")).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText("Jane Smith")).toBeInTheDocument());
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bienvenido a la App/i);
  expect(linkElement).toBeInTheDocument();
});
