/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaConvertCollectionJobData extends KalturaConvartableJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.flavors === 'undefined')
            this.flavors = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uSm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uSm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSx5QkFBeUIsRUFBaUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWF2RyxNQUFNLHNDQUF1QyxTQUFRLHlCQUF5Qjs7OztJQVUxRSxZQUFZLElBQTJDO1FBRW5ELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztLQUM5RDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtDQUFrQyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtTQUN4SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUNBQWlDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udmVydENvbGxlY3Rpb25GbGF2b3JEYXRhIH0gZnJvbSAnLi9LYWx0dXJhQ29udmVydENvbGxlY3Rpb25GbGF2b3JEYXRhJztcbmltcG9ydCB7IEthbHR1cmFDb252YXJ0YWJsZUpvYkRhdGEsIEthbHR1cmFDb252YXJ0YWJsZUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29udmFydGFibGVKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ29udmVydENvbGxlY3Rpb25Kb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhQXJncyB7XG4gICAgZGVzdERpckxvY2FsUGF0aD8gOiBzdHJpbmc7XG5cdGRlc3REaXJSZW1vdGVVcmw/IDogc3RyaW5nO1xuXHRkZXN0RmlsZU5hbWU/IDogc3RyaW5nO1xuXHRpbnB1dFhtbExvY2FsUGF0aD8gOiBzdHJpbmc7XG5cdGlucHV0WG1sUmVtb3RlVXJsPyA6IHN0cmluZztcblx0Y29tbWFuZExpbmVzU3RyPyA6IHN0cmluZztcblx0Zmxhdm9ycz8gOiBLYWx0dXJhQ29udmVydENvbGxlY3Rpb25GbGF2b3JEYXRhW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb252ZXJ0Q29sbGVjdGlvbkpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhIHtcblxuICAgIGRlc3REaXJMb2NhbFBhdGggOiBzdHJpbmc7XG5cdGRlc3REaXJSZW1vdGVVcmwgOiBzdHJpbmc7XG5cdGRlc3RGaWxlTmFtZSA6IHN0cmluZztcblx0aW5wdXRYbWxMb2NhbFBhdGggOiBzdHJpbmc7XG5cdGlucHV0WG1sUmVtb3RlVXJsIDogc3RyaW5nO1xuXHRjb21tYW5kTGluZXNTdHIgOiBzdHJpbmc7XG5cdGZsYXZvcnMgOiBLYWx0dXJhQ29udmVydENvbGxlY3Rpb25GbGF2b3JEYXRhW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb252ZXJ0Q29sbGVjdGlvbkpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5mbGF2b3JzID09PSAndW5kZWZpbmVkJykgdGhpcy5mbGF2b3JzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uSm9iRGF0YScgfSxcblx0XHRcdFx0ZGVzdERpckxvY2FsUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXN0RGlyUmVtb3RlVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc3RGaWxlTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpbnB1dFhtbExvY2FsUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpbnB1dFhtbFJlbW90ZVVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb21tYW5kTGluZXNTdHIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9ycyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnZlcnRDb2xsZWN0aW9uRmxhdm9yRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udmVydENvbGxlY3Rpb25GbGF2b3JEYXRhJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ29udmVydENvbGxlY3Rpb25Kb2JEYXRhJ10gPSBLYWx0dXJhQ29udmVydENvbGxlY3Rpb25Kb2JEYXRhOyJdfQ==