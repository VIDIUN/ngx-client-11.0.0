/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaEmailIngestionProfile } from './KalturaEmailIngestionProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EmailIngestionProfileGetByEmailAddressActionArgs() { }
/** @type {?} */
EmailIngestionProfileGetByEmailAddressActionArgs.prototype.emailAddress;
/**
 * Build request payload for service 'EmailIngestionProfile' action 'getByEmailAddress'.
 *
 * Usage: Retrieve a EmailIngestionProfile by email address
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
export class EmailIngestionProfileGetByEmailAddressAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaEmailIngestionProfile', responseConstructor: KalturaEmailIngestionProfile });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'emailingestionprofile' },
            action: { type: 'c', default: 'getByEmailAddress' },
            emailAddress: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    EmailIngestionProfileGetByEmailAddressAction.prototype.emailAddress;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1haWxJbmdlc3Rpb25Qcm9maWxlR2V0QnlFbWFpbEFkZHJlc3NBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0VtYWlsSW5nZXN0aW9uUHJvZmlsZUdldEJ5RW1haWxBZGRyZXNzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEUsTUFBTSxtREFBb0QsU0FBUSxjQUE0Qzs7OztJQUkxRyxZQUFZLElBQXVEO1FBRS9ELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyw4QkFBOEIsRUFBRSxtQkFBbUIsRUFBRyw0QkFBNEIsRUFBRyxDQUFDLENBQUM7S0FDN0k7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3ZFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ3RELFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGUgfSBmcm9tICcuL0thbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBFbWFpbEluZ2VzdGlvblByb2ZpbGVHZXRCeUVtYWlsQWRkcmVzc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbWFpbEFkZHJlc3MgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdFbWFpbEluZ2VzdGlvblByb2ZpbGUnIGFjdGlvbiAnZ2V0QnlFbWFpbEFkZHJlc3MnLlxuICpcbiAqIFVzYWdlOiBSZXRyaWV2ZSBhIEVtYWlsSW5nZXN0aW9uUHJvZmlsZSBieSBlbWFpbCBhZGRyZXNzXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRW1haWxJbmdlc3Rpb25Qcm9maWxlR2V0QnlFbWFpbEFkZHJlc3NBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlPiB7XG5cbiAgICBlbWFpbEFkZHJlc3MgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRW1haWxJbmdlc3Rpb25Qcm9maWxlR2V0QnlFbWFpbEFkZHJlc3NBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZW1haWxpbmdlc3Rpb25wcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0QnlFbWFpbEFkZHJlc3MnIH0sXG5cdFx0XHRcdGVtYWlsQWRkcmVzcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=