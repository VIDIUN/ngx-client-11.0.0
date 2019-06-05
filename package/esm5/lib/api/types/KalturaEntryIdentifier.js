/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryIdentifierField } from './KalturaEntryIdentifierField';
import { KalturaObjectIdentifier } from './KalturaObjectIdentifier';
/**
 * @record
 */
export function KalturaEntryIdentifierArgs() { }
/** @type {?|undefined} */
KalturaEntryIdentifierArgs.prototype.identifier;
var KalturaEntryIdentifier = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryIdentifier, _super);
    function KalturaEntryIdentifier(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEntryIdentifier.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryIdentifier' },
            identifier: { type: 'es', subTypeConstructor: KalturaEntryIdentifierField, subType: 'KalturaEntryIdentifierField' }
        });
        return result;
    };
    return KalturaEntryIdentifier;
}(KalturaObjectIdentifier));
export { KalturaEntryIdentifier };
if (false) {
    /** @type {?} */
    KalturaEntryIdentifier.prototype.identifier;
}
typesMappingStorage['KalturaEntryIdentifier'] = KalturaEntryIdentifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5SWRlbnRpZmllci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVudHJ5SWRlbnRpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQStCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7QUFPakcsSUFBQTtJQUE0QyxrREFBdUI7SUFJL0QsZ0NBQVksSUFBa0M7ZUFFMUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw2Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtTQUM5RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lDQTlCTDtFQVU0Qyx1QkFBdUIsRUFxQmxFLENBQUE7QUFyQkQsa0NBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5SWRlbnRpZmllckZpZWxkIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlJZGVudGlmaWVyRmllbGQnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdElkZW50aWZpZXIsIEthbHR1cmFPYmplY3RJZGVudGlmaWVyQXJncyB9IGZyb20gJy4vS2FsdHVyYU9iamVjdElkZW50aWZpZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbnRyeUlkZW50aWZpZXJBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RJZGVudGlmaWVyQXJncyB7XG4gICAgaWRlbnRpZmllcj8gOiBLYWx0dXJhRW50cnlJZGVudGlmaWVyRmllbGQ7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbnRyeUlkZW50aWZpZXIgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0SWRlbnRpZmllciB7XG5cbiAgICBpZGVudGlmaWVyIDogS2FsdHVyYUVudHJ5SWRlbnRpZmllckZpZWxkO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW50cnlJZGVudGlmaWVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbnRyeUlkZW50aWZpZXInIH0sXG5cdFx0XHRcdGlkZW50aWZpZXIgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlJZGVudGlmaWVyRmllbGQsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5SWRlbnRpZmllckZpZWxkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW50cnlJZGVudGlmaWVyJ10gPSBLYWx0dXJhRW50cnlJZGVudGlmaWVyOyJdfQ==