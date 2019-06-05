/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction } from './KalturaRuleAction';
/**
 * @record
 */
export function KalturaAccessControlLimitFlavorsActionArgs() { }
/** @type {?|undefined} */
KalturaAccessControlLimitFlavorsActionArgs.prototype.flavorParamsIds;
/** @type {?|undefined} */
KalturaAccessControlLimitFlavorsActionArgs.prototype.isBlockedList;
export class KalturaAccessControlLimitFlavorsAction extends KalturaRuleAction {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControlLimitFlavorsAction' },
            flavorParamsIds: { type: 's' },
            isBlockedList: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAccessControlLimitFlavorsAction.prototype.flavorParamsIds;
    /** @type {?} */
    KalturaAccessControlLimitFlavorsAction.prototype.isBlockedList;
}
typesMappingStorage['KalturaAccessControlLimitFlavorsAction'] = KalturaAccessControlLimitFlavorsAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaW1pdEZsYXZvcnNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBY2Nlc3NDb250cm9sTGltaXRGbGF2b3JzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7QUFRL0UsTUFBTSw2Q0FBOEMsU0FBUSxpQkFBaUI7Ozs7SUFLekUsWUFBWSxJQUFrRDtRQUUxRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0NBQXdDLEVBQUU7WUFDM0YsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdDQUF3QyxDQUFDLEdBQUcsc0NBQXNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJ1bGVBY3Rpb24sIEthbHR1cmFSdWxlQWN0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYVJ1bGVBY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBY2Nlc3NDb250cm9sTGltaXRGbGF2b3JzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUnVsZUFjdGlvbkFyZ3Mge1xuICAgIGZsYXZvclBhcmFtc0lkcz8gOiBzdHJpbmc7XG5cdGlzQmxvY2tlZExpc3Q/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaW1pdEZsYXZvcnNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUnVsZUFjdGlvbiB7XG5cbiAgICBmbGF2b3JQYXJhbXNJZHMgOiBzdHJpbmc7XG5cdGlzQmxvY2tlZExpc3QgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQWNjZXNzQ29udHJvbExpbWl0Rmxhdm9yc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQWNjZXNzQ29udHJvbExpbWl0Rmxhdm9yc0FjdGlvbicgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlzQmxvY2tlZExpc3QgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaW1pdEZsYXZvcnNBY3Rpb24nXSA9IEthbHR1cmFBY2Nlc3NDb250cm9sTGltaXRGbGF2b3JzQWN0aW9uOyJdfQ==