/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaSessionInfo } from './KalturaSessionInfo';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SessionImpersonateByKsActionArgs() { }
/** @type {?} */
SessionImpersonateByKsActionArgs.prototype.session;
/** @type {?|undefined} */
SessionImpersonateByKsActionArgs.prototype.type;
/** @type {?|undefined} */
SessionImpersonateByKsActionArgs.prototype.expiry;
/** @type {?|undefined} */
SessionImpersonateByKsActionArgs.prototype.privileges;
/**
 * Build request payload for service 'session' action 'impersonateByKs'.
 *
 * Usage: Start an impersonated session with Kaltura's server.
 * The result KS info contains the session key that you should pass to all services that requires a ticket.
 * Type, expiry and privileges won't be changed if they're not set
 *
 * Server response type:         KalturaSessionInfo
 * Server failure response type: KalturaAPIException
 */
export class SessionImpersonateByKsAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaSessionInfo', responseConstructor: KalturaSessionInfo });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'session' },
            action: { type: 'c', default: 'impersonateByKs' },
            session: { type: 's' },
            type: { type: 'en', subTypeConstructor: KalturaSessionType, subType: 'KalturaSessionType' },
            expiry: { type: 'n' },
            privileges: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    SessionImpersonateByKsAction.prototype.session;
    /** @type {?} */
    SessionImpersonateByKsAction.prototype.type;
    /** @type {?} */
    SessionImpersonateByKsAction.prototype.expiry;
    /** @type {?} */
    SessionImpersonateByKsAction.prototype.privileges;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vzc2lvbkltcGVyc29uYXRlQnlLc0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2Vzc2lvbkltcGVyc29uYXRlQnlLc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnhFLE1BQU0sbUNBQW9DLFNBQVEsY0FBa0M7Ozs7SUFPaEYsWUFBWSxJQUF1QztRQUUvQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUcsa0JBQWtCLEVBQUcsQ0FBQyxDQUFDO0tBQ3pIOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxTQUFTLEVBQUU7WUFDekQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDcEQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUMvRixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZXNzaW9uSW5mbyB9IGZyb20gJy4vS2FsdHVyYVNlc3Npb25JbmZvJztcblxuaW1wb3J0IHsgS2FsdHVyYVNlc3Npb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhU2Vzc2lvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Vzc2lvbkltcGVyc29uYXRlQnlLc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBzZXNzaW9uIDogc3RyaW5nO1xuXHR0eXBlPyA6IEthbHR1cmFTZXNzaW9uVHlwZTtcblx0ZXhwaXJ5PyA6IG51bWJlcjtcblx0cHJpdmlsZWdlcz8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzZXNzaW9uJyBhY3Rpb24gJ2ltcGVyc29uYXRlQnlLcycuXG4gKlxuICogVXNhZ2U6IFN0YXJ0IGFuIGltcGVyc29uYXRlZCBzZXNzaW9uIHdpdGggS2FsdHVyYSdzIHNlcnZlci5cbiAqIFRoZSByZXN1bHQgS1MgaW5mbyBjb250YWlucyB0aGUgc2Vzc2lvbiBrZXkgdGhhdCB5b3Ugc2hvdWxkIHBhc3MgdG8gYWxsIHNlcnZpY2VzIHRoYXQgcmVxdWlyZXMgYSB0aWNrZXQuXG4gKiBUeXBlLCBleHBpcnkgYW5kIHByaXZpbGVnZXMgd29uJ3QgYmUgY2hhbmdlZCBpZiB0aGV5J3JlIG5vdCBzZXRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhU2Vzc2lvbkluZm9cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25JbXBlcnNvbmF0ZUJ5S3NBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhU2Vzc2lvbkluZm8+IHtcblxuICAgIHNlc3Npb24gOiBzdHJpbmc7XG5cdHR5cGUgOiBLYWx0dXJhU2Vzc2lvblR5cGU7XG5cdGV4cGlyeSA6IG51bWJlcjtcblx0cHJpdmlsZWdlcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTZXNzaW9uSW1wZXJzb25hdGVCeUtzQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhU2Vzc2lvbkluZm8nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlc3Npb25JbmZvICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZXNzaW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnaW1wZXJzb25hdGVCeUtzJyB9LFxuXHRcdFx0XHRzZXNzaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2Vzc2lvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNlc3Npb25UeXBlJyB9LFxuXHRcdFx0XHRleHBpcnkgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJpdmlsZWdlcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=