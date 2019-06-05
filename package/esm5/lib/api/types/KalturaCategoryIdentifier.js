/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryIdentifierField } from './KalturaCategoryIdentifierField';
import { KalturaObjectIdentifier } from './KalturaObjectIdentifier';
/**
 * @record
 */
export function KalturaCategoryIdentifierArgs() { }
/** @type {?|undefined} */
KalturaCategoryIdentifierArgs.prototype.identifier;
var KalturaCategoryIdentifier = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCategoryIdentifier, _super);
    function KalturaCategoryIdentifier(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCategoryIdentifier.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCategoryIdentifier' },
            identifier: { type: 'es', subTypeConstructor: KalturaCategoryIdentifierField, subType: 'KalturaCategoryIdentifierField' }
        });
        return result;
    };
    return KalturaCategoryIdentifier;
}(KalturaObjectIdentifier));
export { KalturaCategoryIdentifier };
if (false) {
    /** @type {?} */
    KalturaCategoryIdentifier.prototype.identifier;
}
typesMappingStorage['KalturaCategoryIdentifier'] = KalturaCategoryIdentifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5SWRlbnRpZmllci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNhdGVnb3J5SWRlbnRpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsdUJBQXVCLEVBQStCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7QUFPakcsSUFBQTtJQUErQyxxREFBdUI7SUFJbEUsbUNBQVksSUFBcUM7ZUFFN0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtTQUNwSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29DQTlCTDtFQVUrQyx1QkFBdUIsRUFxQnJFLENBQUE7QUFyQkQscUNBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNhdGVnb3J5SWRlbnRpZmllckZpZWxkIH0gZnJvbSAnLi9LYWx0dXJhQ2F0ZWdvcnlJZGVudGlmaWVyRmllbGQnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdElkZW50aWZpZXIsIEthbHR1cmFPYmplY3RJZGVudGlmaWVyQXJncyB9IGZyb20gJy4vS2FsdHVyYU9iamVjdElkZW50aWZpZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDYXRlZ29yeUlkZW50aWZpZXJBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RJZGVudGlmaWVyQXJncyB7XG4gICAgaWRlbnRpZmllcj8gOiBLYWx0dXJhQ2F0ZWdvcnlJZGVudGlmaWVyRmllbGQ7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDYXRlZ29yeUlkZW50aWZpZXIgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0SWRlbnRpZmllciB7XG5cbiAgICBpZGVudGlmaWVyIDogS2FsdHVyYUNhdGVnb3J5SWRlbnRpZmllckZpZWxkO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ2F0ZWdvcnlJZGVudGlmaWVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDYXRlZ29yeUlkZW50aWZpZXInIH0sXG5cdFx0XHRcdGlkZW50aWZpZXIgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2F0ZWdvcnlJZGVudGlmaWVyRmllbGQsIHN1YlR5cGUgOiAnS2FsdHVyYUNhdGVnb3J5SWRlbnRpZmllckZpZWxkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2F0ZWdvcnlJZGVudGlmaWVyJ10gPSBLYWx0dXJhQ2F0ZWdvcnlJZGVudGlmaWVyOyJdfQ==