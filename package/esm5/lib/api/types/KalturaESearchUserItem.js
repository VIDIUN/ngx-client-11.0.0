/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchUserFieldName } from './KalturaESearchUserFieldName';
import { KalturaESearchAbstractUserItem } from './KalturaESearchAbstractUserItem';
/**
 * @record
 */
export function KalturaESearchUserItemArgs() { }
/** @type {?|undefined} */
KalturaESearchUserItemArgs.prototype.fieldName;
var KalturaESearchUserItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchUserItem, _super);
    function KalturaESearchUserItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchUserItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchUserItem' },
            fieldName: { type: 'es', subTypeConstructor: KalturaESearchUserFieldName, subType: 'KalturaESearchUserFieldName' }
        });
        return result;
    };
    return KalturaESearchUserItem;
}(KalturaESearchAbstractUserItem));
export { KalturaESearchUserItem };
if (false) {
    /** @type {?} */
    KalturaESearchUserItem.prototype.fieldName;
}
typesMappingStorage['KalturaESearchUserItem'] = KalturaESearchUserItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hVc2VySXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hVc2VySXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsOEJBQThCLEVBQXNDLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7QUFPdEgsSUFBQTtJQUE0QyxrREFBOEI7SUFJdEUsZ0NBQVksSUFBa0M7ZUFFMUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw2Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtTQUM3RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lDQTlCTDtFQVU0Qyw4QkFBOEIsRUFxQnpFLENBQUE7QUFyQkQsa0NBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hVc2VyRmllbGROYW1lIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaFVzZXJGaWVsZE5hbWUnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdFVzZXJJdGVtLCBLYWx0dXJhRVNlYXJjaEFic3RyYWN0VXNlckl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEFic3RyYWN0VXNlckl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoVXNlckl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RVc2VySXRlbUFyZ3Mge1xuICAgIGZpZWxkTmFtZT8gOiBLYWx0dXJhRVNlYXJjaFVzZXJGaWVsZE5hbWU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoVXNlckl0ZW0gZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEFic3RyYWN0VXNlckl0ZW0ge1xuXG4gICAgZmllbGROYW1lIDogS2FsdHVyYUVTZWFyY2hVc2VyRmllbGROYW1lO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaFVzZXJJdGVtQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFU2VhcmNoVXNlckl0ZW0nIH0sXG5cdFx0XHRcdGZpZWxkTmFtZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoVXNlckZpZWxkTmFtZSwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaFVzZXJGaWVsZE5hbWUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoVXNlckl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoVXNlckl0ZW07Il19