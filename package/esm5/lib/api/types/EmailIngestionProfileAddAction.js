/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaEmailIngestionProfile } from './KalturaEmailIngestionProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EmailIngestionProfileAddActionArgs() { }
/** @type {?} */
EmailIngestionProfileAddActionArgs.prototype.EmailIP;
/**
 * Build request payload for service 'EmailIngestionProfile' action 'add'.
 *
 * Usage: EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'EmailIngestionProfile' action 'add'.
 *
 * Usage: EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
EmailIngestionProfileAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(EmailIngestionProfileAddAction, _super);
    function EmailIngestionProfileAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaEmailIngestionProfile', responseConstructor: KalturaEmailIngestionProfile }) || this;
    }
    /**
     * @return {?}
     */
    EmailIngestionProfileAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'emailingestionprofile' },
            action: { type: 'c', default: 'add' },
            EmailIP: { type: 'o', subTypeConstructor: KalturaEmailIngestionProfile, subType: 'KalturaEmailIngestionProfile' }
        });
        return result;
    };
    return EmailIngestionProfileAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'EmailIngestionProfile' action 'add'.
 *
 * Usage: EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
export { EmailIngestionProfileAddAction };
if (false) {
    /** @type {?} */
    EmailIngestionProfileAddAction.prototype.EmailIP;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1haWxJbmdlc3Rpb25Qcm9maWxlQWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FbWFpbEluZ2VzdGlvblByb2ZpbGVBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBb0QsMERBQTRDO0lBSTVGLHdDQUFZLElBQXlDO2VBRWpELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDhCQUE4QixFQUFFLG1CQUFtQixFQUFHLDRCQUE0QixFQUFHLENBQUM7S0FDNUk7Ozs7SUFFUyxxREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN2RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7U0FDNUcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0F2Q0w7RUFrQm9ELGNBQWMsRUFzQmpFLENBQUE7Ozs7Ozs7OztBQXRCRCwwQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVtYWlsSW5nZXN0aW9uUHJvZmlsZUFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBFbWFpbElQIDogS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ0VtYWlsSW5nZXN0aW9uUHJvZmlsZScgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBFbWFpbEluZ2VzdGlvblByb2ZpbGUgQWRkIGFjdGlvbiBhbGxvd3MgeW91IHRvIGFkZCBhIEVtYWlsSW5nZXN0aW9uUHJvZmlsZSB0byBLYWx0dXJhIERCXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRW1haWxJbmdlc3Rpb25Qcm9maWxlQWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZT4ge1xuXG4gICAgRW1haWxJUCA6IEthbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRW1haWxJbmdlc3Rpb25Qcm9maWxlQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2VtYWlsaW5nZXN0aW9ucHJvZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0RW1haWxJUCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=