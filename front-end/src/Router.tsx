import { Routes, Route } from 'react-router-dom';

import { Welcome } from './pages/Welcome';
import { HowAreYou } from './pages/register/HowAreYou';
import { AboutYou } from './pages/register/AboutYou';
import { Adress } from './pages/register/Adress';
import { AdoptionResearch } from './pages/register/AdoptionResearch';
import { Preference } from './pages/register/Preference';
import { Credentials } from './pages/register/Credentials';
import { Organization } from './pages/register/Organization';
import { Match } from './pages/Match';
import { User } from './pages/User';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/register/howareyou" element={<HowAreYou />} />
            <Route path="/register/about" element={<AboutYou />} />
            <Route path="/register/address" element={<Adress />} />
            <Route path="/register/research" element={<AdoptionResearch />} />
            <Route path="/register/preference" element={<Preference />} />
            <Route path="/register/credentials" element={<Credentials />} />
            <Route path="/register/organization" element={<Organization />} />
            <Route path="/match" element={<Match />} />
            <Route path="/user" element={<User />} />
        </Routes>
    );
}