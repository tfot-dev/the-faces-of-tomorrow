import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export const TermsAndConditions = () => {
    return (
        <Grid container spacing={4} direction="column">
            <Grid item>
                <Typography variant="h3">{`The Faces of Tomorrow Terms of Service`}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h4">{`1. Terms`}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">
                    {`By accessing the website at `}
                    <Link component={RouterLink} to="/" variant="body1">
                        {`https://www.thefacesoftomorrow.com`}
                    </Link>
                    {`, you are
                    agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that
                    you are responsible for compliance with any applicable local laws. If you do not agree with any of
                    these terms, you are prohibited from using or accessing this site. The materials contained in this
                    website are protected by applicable copyright and trademark law.`}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h4">{`2. Use License`}</Typography>
            </Grid>
            <ol type="a">
                <li>
                    {`Permission is granted to temporarily download one copy of the materials (information or software) on
                    The Faces of Tomorrow's website for personal, non-commercial transitory viewing only. This is the
                    grant of a license, not a transfer of title, and under this license you may not:`}
                    <ol type="i">
                        <li>{`modify or copy the materials;`}</li>
                        <li>
                            {`use the materials for any commercial purpose, or for any public display (commercial or
                            non-commercial);`}
                        </li>
                        <li>
                            {`attempt to decompile or reverse engineer any software contained on The Faces of Tomorrow's
                            website;`}
                        </li>
                        <li>{`remove any copyright or other proprietary notations from the materials; or`}</li>
                        <li>{`transfer the materials to another person or "mirror" the materials on any other server.`}</li>
                    </ol>
                </li>
                <li>
                    {`This license shall automatically terminate if you violate any of these restrictions and may be
                    terminated by The Faces of Tomorrow at any time. Upon terminating your viewing of these materials or
                    upon the termination of this license, you must destroy any downloaded materials in your possession
                    whether in electronic or printed format.`}
                </li>
            </ol>
            <Grid item>
                <Typography variant="h4">{`3. Disclaimer`}</Typography>
            </Grid>
            <ol type="a">
                <li>
                    {`The materials on The Faces of Tomorrow's website are provided on an 'as is' basis. The Faces of
                    Tomorrow makes no warranties, expressed or implied, and hereby disclaims and negates all other
                    warranties including, without limitation, implied warranties or conditions of merchantability,
                    fitness for a particular purpose, or non-infringement of intellectual property or other violation of
                    rights.`}
                </li>
                <li>
                    {`Further, The Faces of Tomorrow does not warrant or make any representations concerning the accuracy,
                    likely results, or reliability of the use of the materials on its website or otherwise relating to
                    such materials or on any sites linked to this site.`}
                </li>
            </ol>
            <Grid item>
                <Typography variant="h4">{`4. Limitations`}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">
                    {`In no event shall The Faces of Tomorrow or its suppliers be liable for any damages (including,
                    without limitation, damages for loss of data or profit, or due to business interruption) arising out
                    of the use or inability to use the materials on The Faces of Tomorrow's website, even if The Faces of Tomorrow
                    or a The Faces of Tomorrow authorized representative has been notified orally or in writing of the
                    possibility of such damage. Because some jurisdictions do not allow limitations on implied
                    warranties, or limitations of liability for consequential or incidental damages, these limitations
                    may not apply to you.`}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h4">{`5. Accuracy of materials`}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">
                    {`The materials appearing on The Faces of Tomorrow's website could include technical, typographical,
                    or photographic errors. The Faces of Tomorrow does not warrant that any of the materials on its
                    website are accurate, complete or current. The Faces of Tomorrow may make changes to the materials
                    contained on its website at any time without notice. However The Faces of Tomorrow does not make any
                    commitment to update the materials.`}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h4">{`6. Links`}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">
                    {`The Faces of Tomorrow has not reviewed all of the sites linked to its website and is not responsible
                    for the contents of any such linked site. The inclusion of any link does not imply endorsement by
                    The Faces of Tomorrow of the site. Use of any such linked website is at the user's own risk.`}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h4">{`7. Modifications`}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">
                    {`The Faces of Tomorrow may revise these terms of service for its website at any time without notice.
                    By using this website you are agreeing to be bound by the then current version of these terms of
                    service.`}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h4">{`8. Governing Law`}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">
                    {`These terms and conditions are governed by and construed in accordance with the laws of Uttar
                    Pradesh, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State
                    or location.`}
                </Typography>
            </Grid>
        </Grid>
    );
};
