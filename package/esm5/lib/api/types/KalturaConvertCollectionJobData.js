/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConvertCollectionFlavorData } from './KalturaConvertCollectionFlavorData';
import { KalturaConvartableJobData } from './KalturaConvartableJobData';
/**
 * @record
 */
export function KalturaConvertCollectionJobDataArgs() { }
/** @type {?|undefined} */
KalturaConvertCollectionJobDataArgs.prototype.destDirLocalPath;
/** @type {?|undefined} */
KalturaConvertCollectionJobDataArgs.prototype.destDirRemoteUrl;
/** @type {?|undefined} */
KalturaConvertCollectionJobDataArgs.prototype.destFileName;
/** @type {?|undefined} */
KalturaConvertCollectionJobDataArgs.prototype.inputXmlLocalPath;
/** @type {?|undefined} */
KalturaConvertCollectionJobDataArgs.prototype.inputXmlRemoteUrl;
/** @type {?|undefined} */
KalturaConvertCollectionJobDataArgs.prototype.commandLinesStr;
/** @type {?|undefined} */
KalturaConvertCollectionJobDataArgs.prototype.flavors;
var KalturaConvertCollectionJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConvertCollectionJobData, _super);
    function KalturaConvertCollectionJobData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.flavors === 'undefined')
            _this.flavors = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaConvertCollectionJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConvertCollectionJobData' },
            destDirLocalPath: { type: 's' },
            destDirRemoteUrl: { type: 's' },
            destFileName: { type: 's' },
            inputXmlLocalPath: { type: 's' },
            inputXmlRemoteUrl: { type: 's' },
            commandLinesStr: { type: 's' },
            flavors: { type: 'a', subTypeConstructor: KalturaConvertCollectionFlavorData, subType: 'KalturaConvertCollectionFlavorData' }
        });
        return result;
    };
    return KalturaConvertCollectionJobData;
}(KalturaConvartableJobData));
export { KalturaConvertCollectionJobData };
if (false) {
    /** @type {?} */
    KalturaConvertCollectionJobData.prototype.destDirLocalPath;
    /** @type {?} */
    KalturaConvertCollectionJobData.prototype.destDirRemoteUrl;
    /** @type {?} */
    KalturaConvertCollectionJobData.prototype.destFileName;
    /** @type {?} */
    KalturaConvertCollectionJobData.prototype.inputXmlLocalPath;
    /** @type {?} */
    KalturaConvertCollectionJobData.prototype.inputXmlRemoteUrl;
    /** @type {?} */
    KalturaConvertCollectionJobData.prototype.commandLinesStr;
    /** @type {?} */
    KalturaConvertCollectionJobData.prototype.flavors;
}
typesMappingStorage['KalturaConvertCollectionJobData'] = KalturaConvertCollectionJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uSm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uSm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhdkcsSUFBQTtJQUFxRCwyREFBeUI7SUFVMUUseUNBQVksSUFBMkM7UUFBdkQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7S0FDOUQ7Ozs7SUFFUyxzREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1NBQ3hILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MENBakRMO0VBZ0JxRCx5QkFBeUIsRUFrQzdFLENBQUE7QUFsQ0QsMkNBa0NDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uRmxhdm9yRGF0YSB9IGZyb20gJy4vS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uRmxhdm9yRGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhLCBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YUFyZ3Mge1xuICAgIGRlc3REaXJMb2NhbFBhdGg/IDogc3RyaW5nO1xuXHRkZXN0RGlyUmVtb3RlVXJsPyA6IHN0cmluZztcblx0ZGVzdEZpbGVOYW1lPyA6IHN0cmluZztcblx0aW5wdXRYbWxMb2NhbFBhdGg/IDogc3RyaW5nO1xuXHRpbnB1dFhtbFJlbW90ZVVybD8gOiBzdHJpbmc7XG5cdGNvbW1hbmRMaW5lc1N0cj8gOiBzdHJpbmc7XG5cdGZsYXZvcnM/IDogS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uRmxhdm9yRGF0YVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29udmVydENvbGxlY3Rpb25Kb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YSB7XG5cbiAgICBkZXN0RGlyTG9jYWxQYXRoIDogc3RyaW5nO1xuXHRkZXN0RGlyUmVtb3RlVXJsIDogc3RyaW5nO1xuXHRkZXN0RmlsZU5hbWUgOiBzdHJpbmc7XG5cdGlucHV0WG1sTG9jYWxQYXRoIDogc3RyaW5nO1xuXHRpbnB1dFhtbFJlbW90ZVVybCA6IHN0cmluZztcblx0Y29tbWFuZExpbmVzU3RyIDogc3RyaW5nO1xuXHRmbGF2b3JzIDogS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uRmxhdm9yRGF0YVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ29udmVydENvbGxlY3Rpb25Kb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZmxhdm9ycyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZmxhdm9ycyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb252ZXJ0Q29sbGVjdGlvbkpvYkRhdGEnIH0sXG5cdFx0XHRcdGRlc3REaXJMb2NhbFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzdERpclJlbW90ZVVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXN0RmlsZU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aW5wdXRYbWxMb2NhbFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aW5wdXRYbWxSZW1vdGVVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29tbWFuZExpbmVzU3RyIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvcnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb252ZXJ0Q29sbGVjdGlvbkZsYXZvckRhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uRmxhdm9yRGF0YScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uSm9iRGF0YSddID0gS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uSm9iRGF0YTsiXX0=