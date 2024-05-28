import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Homepage, SecondaryPage } from '../pages'

export const RouteProvider = (): JSX.Element => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/secondary-page" element={<SecondaryPage />} />
    </Routes>
  )
}
