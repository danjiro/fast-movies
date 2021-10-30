import { render, screen, fireEvent, act } from '@testing-library/react';

import App from './App';
import searchResults from 'mocks/searchResults';
import localStoragePlaylist from 'mocks/localStoragePlaylist';
import * as api from "api/movieApi";

const setup = () => {
  const utils = render(<App />);
  const input = utils.queryByTestId('search-input');

  return {
    input,
    ...utils,
  }
}

test('should render input and empty states', () => {
  const { input } = setup();
  const movieEmptyState = screen.getByText(/No movies/i);
  const playlistEmptyState = screen.getByText(/playlist is empty/i);

  expect(movieEmptyState).toBeInTheDocument();
  expect(playlistEmptyState).toBeInTheDocument();
  expect(input).toBeInTheDocument()
});

test('should perform search if search input has value <= 3 characters', async () => {
  const { input, queryAllByTestId } = setup();

  jest.spyOn(api, 'searchMovieTitle').mockResolvedValue(searchResults);

  await act(async () => fireEvent.change(input, { target: { value: 'Foo' } }))

  expect(queryAllByTestId('movie-card')).toHaveLength(0);

  await act(async () => fireEvent.change(input, { target: { value: 'Fo' } }))

  expect(queryAllByTestId('movie-card')).toHaveLength(0);
});

test('should load list of movies when search input has value greater than 3 characters', async () => {
  const { input, queryAllByTestId } = setup();

  jest.spyOn(api, 'searchMovieTitle').mockResolvedValue(searchResults);

  await act(async () => fireEvent.change(input, { target: { value: 'Foo bar' } }))

  expect(queryAllByTestId('movie-card')).toHaveLength(10);
});

test('should bring up confirmation screen on initial add to playlist button and close it on cancel', async () => {
  const { input, queryByTestId, queryAllByTestId } = setup();

  jest.spyOn(api, 'searchMovieTitle').mockResolvedValue(searchResults);

  await act(async () => fireEvent.change(input, { target: { value: 'Foo bar' } }))

  fireEvent.click(queryAllByTestId('add-to-playlist')[0]);

  expect(screen.queryByText(/Confirm/i)).toBeInTheDocument();

  fireEvent.click(queryByTestId('add-to-playlist-cancel'));

  expect(screen.queryByText(/Confirm/i)).not.toBeInTheDocument();
});

test('should add and remove movies from playlist', async () => {
  const { input, queryByTestId, queryAllByTestId } = setup();

  jest.spyOn(api, 'searchMovieTitle').mockResolvedValue(searchResults);

  await act(async () => fireEvent.change(input, { target: { value: 'Foo bar' } }))

  fireEvent.click(queryAllByTestId('add-to-playlist')[0]);
  fireEvent.click(queryByTestId('add-to-playlist-confirm'));

  expect(queryAllByTestId('playlist-card')).toHaveLength(1);
  expect(screen.queryByText(/Confirm/i)).not.toBeInTheDocument();

  fireEvent.click(queryAllByTestId('add-to-playlist')[1]);
  fireEvent.click(queryByTestId('add-to-playlist-confirm'));

  expect(queryAllByTestId('playlist-card')).toHaveLength(2);

  fireEvent.click(queryAllByTestId('remove-from-playlist')[0]);

  expect(queryAllByTestId('playlist-card')).toHaveLength(1);
});

test('should load saved playlist from localstorage', async () => {
  jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(JSON.stringify(localStoragePlaylist));

  const { queryAllByTestId } = setup();

  expect(queryAllByTestId('playlist-card')).toHaveLength(5);
});
