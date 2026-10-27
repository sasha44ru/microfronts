import { lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import RemoteMount from "./RemoteMount";

const UsersPage = lazy(() => import('remoteReact/UsersPage'));
const loadRegistry = () => import('remoteVue/RegistryMount');
const loadDashboard = () => import('remoteAngular/AngularMount');

function HomePage() {
    return <h1>Главная</h1>;
}

export default function App() {
    return (
        <div className="app">
            <header className="app__header">
                <span className="app__brand">MF Demo - Host</span>
                <nav className="app__nav">
                    <NavLink to="/" end>Главная</NavLink>
                    <NavLink to="/users">remote-react</NavLink>
                    <NavLink to="/registry">remote-vue</NavLink>
                    <NavLink to="/dashboard">remote-angular</NavLink>
                </nav>
            </header>

            <main className="app__main">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/users"
                        element={
                            <ErrorBoundary>
                                <Suspense fallback={<p>Загрузка React-микрофронта…</p>}>
                                    <UsersPage />
                                </Suspense>
                            </ErrorBoundary>
                        }
                    />
                    <Route
                        path="/registry"
                        element={
                            <ErrorBoundary>
                                <RemoteMount label="remote-vue" load={loadRegistry} />
                            </ErrorBoundary>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <ErrorBoundary>
                                <RemoteMount label="remote-angular" load={loadDashboard} />
                            </ErrorBoundary>
                        }
                    />
                </Routes>
            </main>
        </div>
    );
}