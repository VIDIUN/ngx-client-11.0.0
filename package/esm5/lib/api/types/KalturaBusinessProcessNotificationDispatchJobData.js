/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBusinessProcessServer } from './KalturaBusinessProcessServer';
import { KalturaEventNotificationDispatchJobData } from './KalturaEventNotificationDispatchJobData';
/**
 * @record
 */
export function KalturaBusinessProcessNotificationDispatchJobDataArgs() { }
/** @type {?|undefined} */
KalturaBusinessProcessNotificationDispatchJobDataArgs.prototype.server;
/** @type {?|undefined} */
KalturaBusinessProcessNotificationDispatchJobDataArgs.prototype.caseId;
var KalturaBusinessProcessNotificationDispatchJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBusinessProcessNotificationDispatchJobData, _super);
    function KalturaBusinessProcessNotificationDispatchJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBusinessProcessNotificationDispatchJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBusinessProcessNotificationDispatchJobData' },
            server: { type: 'o', subTypeConstructor: KalturaBusinessProcessServer, subType: 'KalturaBusinessProcessServer' },
            caseId: { type: 's' }
        });
        return result;
    };
    return KalturaBusinessProcessNotificationDispatchJobData;
}(KalturaEventNotificationDispatchJobData));
export { KalturaBusinessProcessNotificationDispatchJobData };
if (false) {
    /** @type {?} */
    KalturaBusinessProcessNotificationDispatchJobData.prototype.server;
    /** @type {?} */
    KalturaBusinessProcessNotificationDispatchJobData.prototype.caseId;
}
typesMappingStorage['KalturaBusinessProcessNotificationDispatchJobData'] = KalturaBusinessProcessNotificationDispatchJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUNBQXVDLEVBQStDLE1BQU0sMkNBQTJDLENBQUM7Ozs7Ozs7OztBQVFqSixJQUFBO0lBQXVFLDZFQUF1QztJQUsxRywyREFBWSxJQUE2RDtlQUVyRSxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHdFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1EQUFtRCxFQUFFO1lBQ3RHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ3BILE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzREQWpDTDtFQVd1RSx1Q0FBdUMsRUF1QjdHLENBQUE7QUF2QkQsNkRBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbURBQW1ELENBQUMsR0FBRyxpREFBaUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyIH0gZnJvbSAnLi9LYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyJztcbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YSwgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGFBcmdzIHtcbiAgICBzZXJ2ZXI/IDogS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlcjtcblx0Y2FzZUlkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YSBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YSB7XG5cbiAgICBzZXJ2ZXIgOiBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyO1xuXHRjYXNlSWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YScgfSxcblx0XHRcdFx0c2VydmVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyLCBzdWJUeXBlIDogJ0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXInIH0sXG5cdFx0XHRcdGNhc2VJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVzaW5lc3NQcm9jZXNzTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhJ10gPSBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhOyJdfQ==