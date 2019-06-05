/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaHttpNotificationData } from './KalturaHttpNotificationData';
/**
 * @record
 */
export function KalturaHttpNotificationDataTextArgs() { }
/** @type {?|undefined} */
KalturaHttpNotificationDataTextArgs.prototype.content;
var KalturaHttpNotificationDataText = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaHttpNotificationDataText, _super);
    function KalturaHttpNotificationDataText(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaHttpNotificationDataText.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaHttpNotificationDataText' },
            content: { type: 'o', subTypeConstructor: KalturaStringValue, subType: 'KalturaStringValue' }
        });
        return result;
    };
    return KalturaHttpNotificationDataText;
}(KalturaHttpNotificationData));
export { KalturaHttpNotificationDataText };
if (false) {
    /** @type {?} */
    KalturaHttpNotificationDataText.prototype.content;
}
typesMappingStorage['KalturaHttpNotificationDataText'] = KalturaHttpNotificationDataText;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhVGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhVGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsMkJBQTJCLEVBQW1DLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7QUFPN0csSUFBQTtJQUFxRCwyREFBMkI7SUFJNUUseUNBQVksSUFBMkM7ZUFFbkQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxzREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN4RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBDQTlCTDtFQVVxRCwyQkFBMkIsRUFxQi9FLENBQUE7QUFyQkQsMkNBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZ1ZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhU3RyaW5nVmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhLCBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFIdHRwTm90aWZpY2F0aW9uRGF0YVRleHRBcmdzICBleHRlbmRzIEthbHR1cmFIdHRwTm90aWZpY2F0aW9uRGF0YUFyZ3Mge1xuICAgIGNvbnRlbnQ/IDogS2FsdHVyYVN0cmluZ1ZhbHVlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhSHR0cE5vdGlmaWNhdGlvbkRhdGFUZXh0IGV4dGVuZHMgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhIHtcblxuICAgIGNvbnRlbnQgOiBLYWx0dXJhU3RyaW5nVmFsdWU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uRGF0YVRleHRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhVGV4dCcgfSxcblx0XHRcdFx0Y29udGVudCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZ1ZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFTdHJpbmdWYWx1ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhVGV4dCddID0gS2FsdHVyYUh0dHBOb3RpZmljYXRpb25EYXRhVGV4dDsiXX0=