import React from 'react';
import { Chip, Grid } from '@material-ui/core';
import { SmartSuggestionTemplates } from '../../constants/SmartSuggestionTemplates';
import { useAuth0 } from '@auth0/auth0-react';

type SmartSuggestionsType = {
    onSelect: (data: string) => void;
};

export const SmartSuggestions = ({ onSelect }: SmartSuggestionsType) => {
    const { user } = useAuth0();
    const userNickName = user.name.split(' ')[0] || '*****';

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Chip
                    size="small"
                    label="Default Email"
                    clickable
                    color="primary"
                    onClick={() => onSelect(SmartSuggestionTemplates.DefaultEmail(userNickName))}
                />
            </Grid>
        </Grid>
    );
};
