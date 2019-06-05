/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUiConfObjType } from './KalturaUiConfObjType';
import { KalturaUiConfCreationMode } from './KalturaUiConfCreationMode';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaUiConfArgs() { }
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.name;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.description;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.objType;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.width;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.height;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.htmlParams;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.swfUrl;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.confFile;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.confFileFeatures;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.config;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.confVars;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.useCdn;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.tags;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.swfUrlVersion;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.creationMode;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.html5Url;
/** @type {?|undefined} */
KalturaUiConfArgs.prototype.partnerTags;
var KalturaUiConf = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUiConf, _super);
    function KalturaUiConf(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUiConf.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUiConf' },
            id: { type: 'n', readOnly: true },
            name: { type: 's' },
            description: { type: 's' },
            partnerId: { type: 'n', readOnly: true },
            objType: { type: 'en', subTypeConstructor: KalturaUiConfObjType, subType: 'KalturaUiConfObjType' },
            objTypeAsString: { type: 's', readOnly: true },
            width: { type: 'n' },
            height: { type: 'n' },
            htmlParams: { type: 's' },
            swfUrl: { type: 's' },
            confFilePath: { type: 's', readOnly: true },
            confFile: { type: 's' },
            confFileFeatures: { type: 's' },
            config: { type: 's' },
            confVars: { type: 's' },
            useCdn: { type: 'b' },
            tags: { type: 's' },
            swfUrlVersion: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            creationMode: { type: 'en', subTypeConstructor: KalturaUiConfCreationMode, subType: 'KalturaUiConfCreationMode' },
            html5Url: { type: 's' },
            version: { type: 's', readOnly: true },
            partnerTags: { type: 's' }
        });
        return result;
    };
    return KalturaUiConf;
}(KalturaObjectBase));
export { KalturaUiConf };
if (false) {
    /** @type {?} */
    KalturaUiConf.prototype.id;
    /** @type {?} */
    KalturaUiConf.prototype.name;
    /** @type {?} */
    KalturaUiConf.prototype.description;
    /** @type {?} */
    KalturaUiConf.prototype.partnerId;
    /** @type {?} */
    KalturaUiConf.prototype.objType;
    /** @type {?} */
    KalturaUiConf.prototype.objTypeAsString;
    /** @type {?} */
    KalturaUiConf.prototype.width;
    /** @type {?} */
    KalturaUiConf.prototype.height;
    /** @type {?} */
    KalturaUiConf.prototype.htmlParams;
    /** @type {?} */
    KalturaUiConf.prototype.swfUrl;
    /** @type {?} */
    KalturaUiConf.prototype.confFilePath;
    /** @type {?} */
    KalturaUiConf.prototype.confFile;
    /** @type {?} */
    KalturaUiConf.prototype.confFileFeatures;
    /** @type {?} */
    KalturaUiConf.prototype.config;
    /** @type {?} */
    KalturaUiConf.prototype.confVars;
    /** @type {?} */
    KalturaUiConf.prototype.useCdn;
    /** @type {?} */
    KalturaUiConf.prototype.tags;
    /** @type {?} */
    KalturaUiConf.prototype.swfUrlVersion;
    /** @type {?} */
    KalturaUiConf.prototype.createdAt;
    /** @type {?} */
    KalturaUiConf.prototype.updatedAt;
    /** @type {?} */
    KalturaUiConf.prototype.creationMode;
    /** @type {?} */
    KalturaUiConf.prototype.html5Url;
    /** @type {?} */
    KalturaUiConf.prototype.version;
    /** @type {?} */
    KalturaUiConf.prototype.partnerTags;
}
typesMappingStorage['KalturaUiConf'] = KalturaUiConf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVpQ29uZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVVpQ29uZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCbEYsSUFBQTtJQUFtQyx5Q0FBaUI7SUEyQmhELHVCQUFZLElBQXlCO2VBRWpDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsb0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ2xFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3RHLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNqRCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUM5QyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNySCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0JBN0ZMO0VBMkJtQyxpQkFBaUIsRUFtRW5ELENBQUE7QUFuRUQseUJBbUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsR0FBRyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVpQ29uZk9ialR5cGUgfSBmcm9tICcuL0thbHR1cmFVaUNvbmZPYmpUeXBlJztcbmltcG9ydCB7IEthbHR1cmFVaUNvbmZDcmVhdGlvbk1vZGUgfSBmcm9tICcuL0thbHR1cmFVaUNvbmZDcmVhdGlvbk1vZGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVaUNvbmZBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0b2JqVHlwZT8gOiBLYWx0dXJhVWlDb25mT2JqVHlwZTtcblx0d2lkdGg/IDogbnVtYmVyO1xuXHRoZWlnaHQ/IDogbnVtYmVyO1xuXHRodG1sUGFyYW1zPyA6IHN0cmluZztcblx0c3dmVXJsPyA6IHN0cmluZztcblx0Y29uZkZpbGU/IDogc3RyaW5nO1xuXHRjb25mRmlsZUZlYXR1cmVzPyA6IHN0cmluZztcblx0Y29uZmlnPyA6IHN0cmluZztcblx0Y29uZlZhcnM/IDogc3RyaW5nO1xuXHR1c2VDZG4/IDogYm9vbGVhbjtcblx0dGFncz8gOiBzdHJpbmc7XG5cdHN3ZlVybFZlcnNpb24/IDogc3RyaW5nO1xuXHRjcmVhdGlvbk1vZGU/IDogS2FsdHVyYVVpQ29uZkNyZWF0aW9uTW9kZTtcblx0aHRtbDVVcmw/IDogc3RyaW5nO1xuXHRwYXJ0bmVyVGFncz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVaUNvbmYgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0bmFtZSA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0b2JqVHlwZSA6IEthbHR1cmFVaUNvbmZPYmpUeXBlO1xuXHRyZWFkb25seSBvYmpUeXBlQXNTdHJpbmcgOiBzdHJpbmc7XG5cdHdpZHRoIDogbnVtYmVyO1xuXHRoZWlnaHQgOiBudW1iZXI7XG5cdGh0bWxQYXJhbXMgOiBzdHJpbmc7XG5cdHN3ZlVybCA6IHN0cmluZztcblx0cmVhZG9ubHkgY29uZkZpbGVQYXRoIDogc3RyaW5nO1xuXHRjb25mRmlsZSA6IHN0cmluZztcblx0Y29uZkZpbGVGZWF0dXJlcyA6IHN0cmluZztcblx0Y29uZmlnIDogc3RyaW5nO1xuXHRjb25mVmFycyA6IHN0cmluZztcblx0dXNlQ2RuIDogYm9vbGVhbjtcblx0dGFncyA6IHN0cmluZztcblx0c3dmVXJsVmVyc2lvbiA6IHN0cmluZztcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0Y3JlYXRpb25Nb2RlIDogS2FsdHVyYVVpQ29uZkNyZWF0aW9uTW9kZTtcblx0aHRtbDVVcmwgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHZlcnNpb24gOiBzdHJpbmc7XG5cdHBhcnRuZXJUYWdzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVWlDb25mQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVaUNvbmYnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRvYmpUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVpQ29uZk9ialR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVVpQ29uZk9ialR5cGUnIH0sXG5cdFx0XHRcdG9ialR5cGVBc1N0cmluZyA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHdpZHRoIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGhlaWdodCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRodG1sUGFyYW1zIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN3ZlVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb25mRmlsZVBhdGggOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjb25mRmlsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb25mRmlsZUZlYXR1cmVzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbmZpZyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb25mVmFycyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VDZG4gOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0dGFncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzd2ZVcmxWZXJzaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0aW9uTW9kZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVaUNvbmZDcmVhdGlvbk1vZGUsIHN1YlR5cGUgOiAnS2FsdHVyYVVpQ29uZkNyZWF0aW9uTW9kZScgfSxcblx0XHRcdFx0aHRtbDVVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmVyc2lvbiA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJUYWdzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVaUNvbmYnXSA9IEthbHR1cmFVaUNvbmY7Il19