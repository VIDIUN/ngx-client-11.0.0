/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEmailNotificationRecipientProviderType } from './KalturaEmailNotificationRecipientProviderType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaEmailNotificationRecipientJobDataArgs() { }
var KalturaEmailNotificationRecipientJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEmailNotificationRecipientJobData, _super);
    function KalturaEmailNotificationRecipientJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEmailNotificationRecipientJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEmailNotificationRecipientJobData' },
            providerType: { type: 'es', readOnly: true, subTypeConstructor: KalturaEmailNotificationRecipientProviderType, subType: 'KalturaEmailNotificationRecipientProviderType' }
        });
        return result;
    };
    return KalturaEmailNotificationRecipientJobData;
}(KalturaObjectBase));
export { KalturaEmailNotificationRecipientJobData };
if (false) {
    /** @type {?} */
    KalturaEmailNotificationRecipientJobData.prototype.providerType;
}
typesMappingStorage['KalturaEmailNotificationRecipientJobData'] = KalturaEmailNotificationRecipientJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNkNBQTZDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoSCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBT2xGLElBQUE7SUFBOEQsb0VBQWlCO0lBSTNFLGtEQUFZLElBQW9EO2VBRTVELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsK0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMENBQTBDLEVBQUU7WUFDN0YsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZDQUE2QyxFQUFFLE9BQU8sRUFBRywrQ0FBK0MsRUFBRTtTQUNySyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21EQTlCTDtFQVU4RCxpQkFBaUIsRUFxQjlFLENBQUE7QUFyQkQsb0RBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDBDQUEwQyxDQUFDLEdBQUcsd0NBQXdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudEpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBwcm92aWRlclR5cGUgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlclR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YScgfSxcblx0XHRcdFx0cHJvdmlkZXJUeXBlIDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRQcm92aWRlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50UHJvdmlkZXJUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhJ10gPSBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhOyJdfQ==