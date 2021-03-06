import AccessDecisionManager, { Voter } from '@wizeline/access-decision-manager';
import AccessDecisionManagerProvider from './access-decision-manager-provider';
import isGrantedMiddleware from './is-granted-middleware';

export default AccessDecisionManagerProvider;
export { isGrantedMiddleware, AccessDecisionManager, Voter }
