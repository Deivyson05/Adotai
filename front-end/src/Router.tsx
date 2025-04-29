import { Routes, Route } from 'react-router-dom';

import { Welcome } from './pages/Welcome';
import { HowAreYou } from './pages/HowAreYou';
import { AboutYou } from './pages/AboutYou';
import { Adress } from './pages/Adress';
import { AdoptionResearch } from './pages/AdoptionResearch';
import { Preference } from './pages/Preference';
import { Credentials } from './pages/Credentials';
import { Organization } from './pages/Organization';

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
        </Routes>
    );
}