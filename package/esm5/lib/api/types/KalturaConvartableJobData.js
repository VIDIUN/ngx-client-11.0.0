/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSourceFileSyncDescriptor } from './KalturaSourceFileSyncDescriptor';
import { KalturaFlavorParamsOutput } from './KalturaFlavorParamsOutput';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaConvartableJobDataArgs() { }
/** @type {?|undefined} */
KalturaConvartableJobDataArgs.prototype.srcFileSyncLocalPath;
/** @type {?|undefined} */
KalturaConvartableJobDataArgs.prototype.actualSrcFileSyncLocalPath;
/** @type {?|undefined} */
KalturaConvartableJobDataArgs.prototype.srcFileSyncRemoteUrl;
/** @type {?|undefined} */
KalturaConvartableJobDataArgs.prototype.srcFileSyncs;
/** @type {?|undefined} */
KalturaConvartableJobDataArgs.prototype.engineVersion;
/** @type {?|undefined} */
KalturaConvartableJobDataArgs.prototype.flavorParamsOutputId;
/** @type {?|undefined} */
KalturaConvartableJobDataArgs.prototype.flavorParamsOutput;
/** @type {?|undefined} */
KalturaConvartableJobDataArgs.prototype.mediaInfoId;
/** @type {?|undefined} */
KalturaConvartableJobDataArgs.prototype.currentOperationSet;
/** @type {?|undefined} */
KalturaConvartableJobDataArgs.prototype.currentOperationIndex;
/** @type {?|undefined} */
KalturaConvartableJobDataArgs.prototype.pluginData;
var KalturaConvartableJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConvartableJobData, _super);
    function KalturaConvartableJobData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.srcFileSyncs === 'undefined')
            _this.srcFileSyncs = [];
        if (typeof _this.pluginData === 'undefined')
            _this.pluginData = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaConvartableJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConvartableJobData' },
            srcFileSyncLocalPath: { type: 's' },
            actualSrcFileSyncLocalPath: { type: 's' },
            srcFileSyncRemoteUrl: { type: 's' },
            srcFileSyncs: { type: 'a', subTypeConstructor: KalturaSourceFileSyncDescriptor, subType: 'KalturaSourceFileSyncDescriptor' },
            engineVersion: { type: 'n' },
            flavorParamsOutputId: { type: 'n' },
            flavorParamsOutput: { type: 'o', subTypeConstructor: KalturaFlavorParamsOutput, subType: 'KalturaFlavorParamsOutput' },
            mediaInfoId: { type: 'n' },
            currentOperationSet: { type: 'n' },
            currentOperationIndex: { type: 'n' },
            pluginData: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    };
    return KalturaConvartableJobData;
}(KalturaJobData));
export { KalturaConvartableJobData };
if (false) {
    /** @type {?} */
    KalturaConvartableJobData.prototype.srcFileSyncLocalPath;
    /** @type {?} */
    KalturaConvartableJobData.prototype.actualSrcFileSyncLocalPath;
    /** @type {?} */
    KalturaConvartableJobData.prototype.srcFileSyncRemoteUrl;
    /** @type {?} */
    KalturaConvartableJobData.prototype.srcFileSyncs;
    /** @type {?} */
    KalturaConvartableJobData.prototype.engineVersion;
    /** @type {?} */
    KalturaConvartableJobData.prototype.flavorParamsOutputId;
    /** @type {?} */
    KalturaConvartableJobData.prototype.flavorParamsOutput;
    /** @type {?} */
    KalturaConvartableJobData.prototype.mediaInfoId;
    /** @type {?} */
    KalturaConvartableJobData.prototype.currentOperationSet;
    /** @type {?} */
    KalturaConvartableJobData.prototype.currentOperationIndex;
    /** @type {?} */
    KalturaConvartableJobData.prototype.pluginData;
}
typesMappingStorage['KalturaConvartableJobData'] = KalturaConvartableJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ0RSxJQUFBO0lBQStDLHFEQUFjO0lBY3pELG1DQUFZLElBQXFDO1FBQWpELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBR2Q7UUFGRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDM0UsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOztLQUM5RDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0Msb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsK0JBQStCLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQ2hJLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDMUgsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtTQUNyRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29DQWhFTDtFQXNCK0MsY0FBYyxFQTJDNUQsQ0FBQTtBQTNDRCxxQ0EyQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTb3VyY2VGaWxlU3luY0Rlc2NyaXB0b3IgfSBmcm9tICcuL0thbHR1cmFTb3VyY2VGaWxlU3luY0Rlc2NyaXB0b3InO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dCB9IGZyb20gJy4vS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dCc7XG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGFBcmdzIHtcbiAgICBzcmNGaWxlU3luY0xvY2FsUGF0aD8gOiBzdHJpbmc7XG5cdGFjdHVhbFNyY0ZpbGVTeW5jTG9jYWxQYXRoPyA6IHN0cmluZztcblx0c3JjRmlsZVN5bmNSZW1vdGVVcmw/IDogc3RyaW5nO1xuXHRzcmNGaWxlU3luY3M/IDogS2FsdHVyYVNvdXJjZUZpbGVTeW5jRGVzY3JpcHRvcltdO1xuXHRlbmdpbmVWZXJzaW9uPyA6IG51bWJlcjtcblx0Zmxhdm9yUGFyYW1zT3V0cHV0SWQ/IDogbnVtYmVyO1xuXHRmbGF2b3JQYXJhbXNPdXRwdXQ/IDogS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dDtcblx0bWVkaWFJbmZvSWQ/IDogbnVtYmVyO1xuXHRjdXJyZW50T3BlcmF0aW9uU2V0PyA6IG51bWJlcjtcblx0Y3VycmVudE9wZXJhdGlvbkluZGV4PyA6IG51bWJlcjtcblx0cGx1Z2luRGF0YT8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIHNyY0ZpbGVTeW5jTG9jYWxQYXRoIDogc3RyaW5nO1xuXHRhY3R1YWxTcmNGaWxlU3luY0xvY2FsUGF0aCA6IHN0cmluZztcblx0c3JjRmlsZVN5bmNSZW1vdGVVcmwgOiBzdHJpbmc7XG5cdHNyY0ZpbGVTeW5jcyA6IEthbHR1cmFTb3VyY2VGaWxlU3luY0Rlc2NyaXB0b3JbXTtcblx0ZW5naW5lVmVyc2lvbiA6IG51bWJlcjtcblx0Zmxhdm9yUGFyYW1zT3V0cHV0SWQgOiBudW1iZXI7XG5cdGZsYXZvclBhcmFtc091dHB1dCA6IEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQ7XG5cdG1lZGlhSW5mb0lkIDogbnVtYmVyO1xuXHRjdXJyZW50T3BlcmF0aW9uU2V0IDogbnVtYmVyO1xuXHRjdXJyZW50T3BlcmF0aW9uSW5kZXggOiBudW1iZXI7XG5cdHBsdWdpbkRhdGEgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNyY0ZpbGVTeW5jcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuc3JjRmlsZVN5bmNzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLnBsdWdpbkRhdGEgPT09ICd1bmRlZmluZWQnKSB0aGlzLnBsdWdpbkRhdGEgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhJyB9LFxuXHRcdFx0XHRzcmNGaWxlU3luY0xvY2FsUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhY3R1YWxTcmNGaWxlU3luY0xvY2FsUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzcmNGaWxlU3luY1JlbW90ZVVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzcmNGaWxlU3luY3MgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTb3VyY2VGaWxlU3luY0Rlc2NyaXB0b3IsIHN1YlR5cGUgOiAnS2FsdHVyYVNvdXJjZUZpbGVTeW5jRGVzY3JpcHRvcicgfSxcblx0XHRcdFx0ZW5naW5lVmVyc2lvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNPdXRwdXRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNPdXRwdXQgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQsIHN1YlR5cGUgOiAnS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dCcgfSxcblx0XHRcdFx0bWVkaWFJbmZvSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y3VycmVudE9wZXJhdGlvblNldCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjdXJyZW50T3BlcmF0aW9uSW5kZXggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGx1Z2luRGF0YSA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YSddID0gS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YTsiXX0=