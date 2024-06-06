'use client';
import '../index.css';
import Head from 'next/head';
// import Link from 'next/link';
import { Divider, Link, Sheet, Typography } from '@mui/joy';

import { Providers } from "../redux/provider";

export default function MyApp({ children }: { children: React.ReactNode }) {

    return (
        <html>
            <Head>
                <meta charSet="utf-8" />

                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <title>fabric.js sandbox</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <body>
                <Providers>
                    <Sheet>
                        <Sheet>
                            <Typography>
                                CanvasX Demo
                            </Typography>
                            <Sheet sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', gap: '10px' }}>
                                <Link

                                    href="/"

                                // active={router === '/'}
                                >
                                    HOME
                                </Link>
                                <Divider orientation="vertical" />
                                <Link

                                    href="/text"

                                // active={route === '/node'}
                                >
                                    TEXT
                                </Link>
                                <Divider orientation="vertical" />
                                <Link
                                    href="/notes"

                                    rel="noopener noreferrer"

                                >
                                    STICKE NOTES
                                </Link>
                                <Divider orientation="vertical" />
                                <Link
                                    href="/shapes"
                                >
                                    SHAPES
                                </Link>
                                <Divider orientation="vertical" />
                                <Link
                                    href="/connector"
                                >
                                    CONNECTOR
                                </Link>
                                <Divider orientation="vertical" />
                                <Link
                                    href="/align"
                                >
                                    ALIGNMENT
                                </Link>
                                <Divider orientation="vertical" />
                                <Link
                                    href=" /draw"
                                >
                                    DRAW
                                </Link>
                                <Divider orientation="vertical" />
                                <Link
                                    href=" /file"
                                >
                                    FILE
                                </Link>
                                <Divider orientation="vertical" />
                                <Link
                                    href=" /website"
                                >
                                    WEBSITE
                                </Link>
                                <Divider orientation="vertical" />
                                <Link
                                    href=" /image"
                                >
                                    IMAGE
                                </Link>
                                <Divider orientation="vertical" />
                                <Link
                                    href=" /viewport"
                                >
                                    VIEWPORT
                                </Link>
                            </Sheet>
                        </Sheet>
                    </Sheet>
                    {children}
                </Providers>
            </body>
        </html>
    );
}

