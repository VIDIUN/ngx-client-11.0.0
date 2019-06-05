/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetParamsResourceContainer } from './KalturaAssetParamsResourceContainer';
import { KalturaResource } from './KalturaResource';
/**
 * @record
 */
export function KalturaAssetsParamsResourceContainersArgs() { }
/** @type {?|undefined} */
KalturaAssetsParamsResourceContainersArgs.prototype.resources;
var KalturaAssetsParamsResourceContainers = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAssetsParamsResourceContainers, _super);
    function KalturaAssetsParamsResourceContainers(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.resources === 'undefined')
            _this.resources = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaAssetsParamsResourceContainers.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAssetsParamsResourceContainers' },
            resources: { type: 'a', subTypeConstructor: KalturaAssetParamsResourceContainer, subType: 'KalturaAssetParamsResourceContainer' }
        });
        return result;
    };
    return KalturaAssetsParamsResourceContainers;
}(KalturaResource));
export { KalturaAssetsParamsResourceContainers };
if (false) {
    /** @type {?} */
    KalturaAssetsParamsResourceContainers.prototype.resources;
}
typesMappingStorage['KalturaAssetsParamsResourceContainers'] = KalturaAssetsParamsResourceContainers;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0c1BhcmFtc1Jlc291cmNlQ29udGFpbmVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFzc2V0c1BhcmFtc1Jlc291cmNlQ29udGFpbmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsZUFBZSxFQUF1QixNQUFNLG1CQUFtQixDQUFDOzs7Ozs7O0FBT3pFLElBQUE7SUFBMkQsaUVBQWU7SUFJdEUsK0NBQVksSUFBaUQ7UUFBN0QsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFNBQVMsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7S0FDbEU7Ozs7SUFFUyw0REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUMxRixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1DQUFtQyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtTQUM1SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dEQS9CTDtFQVUyRCxlQUFlLEVBc0J6RSxDQUFBO0FBdEJELGlEQXNCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1Q0FBdUMsQ0FBQyxHQUFHLHFDQUFxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBc3NldFBhcmFtc1Jlc291cmNlQ29udGFpbmVyIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXRQYXJhbXNSZXNvdXJjZUNvbnRhaW5lcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVzb3VyY2UsIEthbHR1cmFSZXNvdXJjZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZXNvdXJjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFzc2V0c1BhcmFtc1Jlc291cmNlQ29udGFpbmVyc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlc291cmNlQXJncyB7XG4gICAgcmVzb3VyY2VzPyA6IEthbHR1cmFBc3NldFBhcmFtc1Jlc291cmNlQ29udGFpbmVyW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBc3NldHNQYXJhbXNSZXNvdXJjZUNvbnRhaW5lcnMgZXh0ZW5kcyBLYWx0dXJhUmVzb3VyY2Uge1xuXG4gICAgcmVzb3VyY2VzIDogS2FsdHVyYUFzc2V0UGFyYW1zUmVzb3VyY2VDb250YWluZXJbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFzc2V0c1BhcmFtc1Jlc291cmNlQ29udGFpbmVyc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlc291cmNlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucmVzb3VyY2VzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFzc2V0c1BhcmFtc1Jlc291cmNlQ29udGFpbmVycycgfSxcblx0XHRcdFx0cmVzb3VyY2VzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXNzZXRQYXJhbXNSZXNvdXJjZUNvbnRhaW5lciwgc3ViVHlwZSA6ICdLYWx0dXJhQXNzZXRQYXJhbXNSZXNvdXJjZUNvbnRhaW5lcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFzc2V0c1BhcmFtc1Jlc291cmNlQ29udGFpbmVycyddID0gS2FsdHVyYUFzc2V0c1BhcmFtc1Jlc291cmNlQ29udGFpbmVyczsiXX0=