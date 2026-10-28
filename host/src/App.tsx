import {lazy, Suspense, useRef, useState} from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import RemoteMount from "./RemoteMount";

const UsersPage = lazy(() => import('remoteReact/UsersPage'));
const loadRegistry = () => import('remoteVue/RegistryMount');
const loadDashboard = () => import('remoteAngular/AngularMount');

function HomePage() {
    const [count, setCount] = useState(0);
    const modalRef = useRef<HTMLElement & { show: () => void; close: () => void }>(null);
    return (
        <div>
            <h1>Главная</h1>
            <p>Нажатий: {count}</p>
            <ui-button onClick={() => setCount((c) => c + 1)}>Нажми меня</ui-button>

            <p style={{ marginTop: 24, display: 'flex', gap: 8 }}>
                <ui-badge tone="neutral">new</ui-badge>
                <ui-badge tone="success">done</ui-badge>
                <ui-badge tone="warning">pending</ui-badge>
                <ui-badge tone="danger">failed</ui-badge>
            </p>

            <p style={{ marginTop: 24 }}>
                <ui-input label="Имя" placeholder="Введите имя" />
            </p>
            <ui-button onClick={() => modalRef.current?.show()}>Открыть модалку</ui-button>

            <ui-modal ref={modalRef} title="Новая заявка">
                <p>Содержимое модалки.</p>
                <ui-button slot="footer" onClick={() => modalRef.current?.close()}>
                    Закрыть
                </ui-button>
            </ui-modal>
        </div>
    );
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
                                <RemoteMount key="registry" label="remote-vue" load={loadRegistry} />
                            </ErrorBoundary>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <ErrorBoundary>
                                <RemoteMount key="dashboard" label="remote-angular" load={loadDashboard} />
                            </ErrorBoundary>
                        }
                    />
                </Routes>
            </main>
        </div>
    );
}