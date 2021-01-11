import { Your_Story } from '../generated/graphql';

export const isUnassigned = ({ assigned_to }: Your_Story): boolean => assigned_to === null;

export const isStoryReady = ({ written_story }: Your_Story): boolean => !!written_story?.ready;
